import { useState } from "react";
import axios from 'axios'; 

const Test = () => {
    const [fileImg, setFileImg] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);

    const sendFileToIPFS = async (e) => {
        e.preventDefault();
        console.log("fileImg", fileImg);
        if (fileImg) {
            try {
                console.log("trying to upload file");
                const formData = new FormData();
                formData.append("file", fileImg);
                console.log("TRYING TO CONNECT TO PINATA...")
                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `9d04b210b416783b5826`,
                        'pinata_secret_api_key': `56956811e6faa6aa1fc6f49fcd770234642db9267d0e6070418976d3197f3d68`,
                        "Content-Type": "multipart/form-data"
                    },
                });
                console.log("File uploaded to IPFS: ");
                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                console.log(ImgHash); 
                setImgUrl(`https://ipfs.io/ipfs/${resFile.data.IpfsHash}`);
                console.log("THE IMAGE URL: ", imgUrl);
            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }

    return(
        <div>
            <form onSubmit={sendFileToIPFS}>
                <input type="file" onChange={(e) =>setFileImg(e.target.files[0])} required />
                <button type='submit' >Mint NFT</button>            
            </form>
            {imgUrl && <img src={imgUrl} alt="Uploaded to IPFS" />}
        </div>
    )
}

export default Test;
