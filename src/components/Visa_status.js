import React, { useEffect, useState } from 'react';
import CustomErrorPage from './utilites/CustomErrorPage';
import { ethers } from 'ethers';
import GOV_CONTRACT_ABI from './Contract/gov.json';
import Visa_CONTRACT_ABI from './Contract/visa.json';

const Visa_status = () => {
    const [_uuid, setUuid] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [statusesAndNotes, setStatusesAndNotes] = useState([]);


    // Check if session ID exists
    const sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
        // Redirect to login page if session ID does not exist
        // window.location.href = '/visa_login';
        return <CustomErrorPage message="Session ID not found. Please log in again." />;
    }


    // Function to handle setting status
    const handleSetStatus = async (e) => {
        e.preventDefault();
        try {
            console.log('Initializing Ether.js...');
            const GOV_CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
            const abi = GOV_CONTRACT_ABI.abi;

            // Initialize ethers by connecting to the network
            const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
            const privateKey = process.env.REACT_APP_PRIVATE_KEY;
            const wallet = new ethers.Wallet(privateKey);
            const signer = wallet.connect(provider);

            const contract = new ethers.Contract(GOV_CONTRACT_ADDRESS, abi, signer);
            console.log("Ether.js initialized!!");

            console.log("id:", _uuid, "status:", status);
            // Getting subcontract addr.
            const SubContract = await contract.getSubContractDetails(_uuid);
            console.log('User contract address:', SubContract);

            // Getting visacontract addr.
            const getSubContract = sessionStorage.getItem('uid');
            console.log('Visa address:', getSubContract);

            const Visaabi = Visa_CONTRACT_ABI.abi;
            const Visacontract = new ethers.Contract(getSubContract, Visaabi, signer);
            console.log("Visa Contract Initialized!!");

            console.log("id:", SubContract, "status:", status);
            const tx = await Visacontract.setVisaStatus(SubContract, status);
            await tx.wait();
            console.log("Status SET!!")

            // Reset form fields after successful transaction
            setUuid('');
            setStatus('');
        } catch (error) {
            console.error('Error setting status:', error);
            setErrorMessage('Error setting status. Please try again.');
        }
    };

    // Function to handle getting status
    const handleGetStatus = async (e) => {
        e.preventDefault();
        try {
            console.log('Initializing Ether.js...');

            // Initialize ethers by connecting to the network
            const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
            const privateKey = process.env.REACT_APP_PRIVATE_KEY;
            const wallet = new ethers.Wallet(privateKey);
            const signer = wallet.connect(provider);
            console.log("Ether.js initialized!!");

            // Getting visacontract addr.
            const getSubContract = sessionStorage.getItem('uid');
            console.log('Visa address:', getSubContract);

            const Visaabi = Visa_CONTRACT_ABI.abi;
            const Visacontract = new ethers.Contract(getSubContract, Visaabi, signer);
            console.log("Visa Contract Initialized!!");

            const statusesAndNotes = await Visacontract.getAllVisaStatuses();
            console.log('Statuses and Notes:', statusesAndNotes);
            setStatusesAndNotes(statusesAndNotes);
        } catch (error) {
            console.error('Error getting status:', error);
            setErrorMessage('Error getting status. Please try again.');
        }
    };

    // Render status dynamically
    const renderedStatuses = statusesAndNotes.map(status => (
        <div key={status}>
            {status ? "Approved" : "Revoked"}
        </div>
    ));

    // Render visa page
    return (
        <div className="m-5">
            <h2 className="text-5xl text-center mb-5 font-bold">Status Page</h2>
            {/* Form to set border status and notes */}
            <div className="flex">
                <form
                    id="setStatusForm"
                    className="p-8 text-xl shadow-2xl rounded-3xl ml-20"
                    onSubmit={handleSetStatus}
                >
                    <table>
                        <tr className="h-20 text-2xl">
                            <td><label htmlFor="uuid" className="px-8 pr-12">ID:</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="uuid"
                                    name="uuid"
                                    value={_uuid}
                                    onChange={(e) => setUuid(e.target.value)}
                                    placeholder="Enter UUID"
                                    required
                                    className="rounded-xl p-5 w-96 mb-5"
                                />
                            </td>
                        </tr>
                        <tr className="h-20 text-2xl">
                            <td>
                                <label htmlFor="status" className="px-8 pr-12">Status:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="rounded-xl p-5 w-96 mb-5"
                                    id="status"
                                    name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    placeholder="Enter status"
                                    required
                                />
                            </td>
                        </tr>
                        {/* <tr className="h-20 text-2xl">
                            <td><label htmlFor="note" className="px-8 pr-12">Note:</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="note"
                                    name="note"
                                    className="rounded-xl p-5 w-96 mb-5"
                                    placeholder="Enter note"
                                    required
                                />
                            </td>
                        </tr> */}
                    </table>
                    {/* Removed action and method attributes */}
                    <input
                        type="submit"
                        className="cursor-pointer bg-black text-white rounded-3xl py-4 ml-96 px-8 hover:border-4 hover:border-blue-200 hover:text-blue-200 hover:uppercase"
                        value="Set Status"
                    />
                </form>
                <br />
                {/* Form to get all statuses and notes for a UUID */}
                <form
                    id="getStatusForm"
                    className="p-8 text-xl shadow-2xl rounded-3xl ml-20 pt-32"
                    onSubmit={handleGetStatus}
                >
                    <label htmlFor="uuid" className="px-8 pr-12">GET THE STATUS:</label>
                    {/* <input
                        type="text"
                        id="uuid"
                        name="uuid"
                        className="rounded-xl p-5 w-96 mb-5"
                        placeholder="Enter UUID to get statuses"
                        required
                    />
                    <br /><br /> */}
                    {/* Removed action and method attributes */}
                    <input
                        type="submit"
                        className="cursor-pointer bg-black text-white rounded-3xl py-4 ml-96 px-8 hover:border-4 hover:border-blue-200 hover:text-blue-200 hover:uppercase"
                        value="Get Statuses"
                    />
                </form>
            </div>
            <hr className="mt-5 border-b-2 border-black" />
            {/* Display all statuses and notes */}
            <div className="allStatuses" id="allStatuses">
                <h3 className="text-2xl text-center my-5 font-bold -mt-16">
                    All Statuses and Notes
                </h3>
                {renderedStatuses}
            </div>
        </div>
    );
};

export default Visa_status;
