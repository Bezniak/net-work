import React from "react";
import style from "./PhotoToolsHover.module.css";
import {IoClose} from "react-icons/io5";

// export const UpdatePhoto = (props) => {
//
//     const onMainPhotoSelected = (e) => {
//         if (e.target.files.length) {
//             props.savePhoto(e.target.files[0]);
//         }
//     }
//
//     return (
//         <div className={style.updatePhotoBlock}>
//             <div className={style.close} onClick={props.onClose}>
//                 <IoClose/>
//             </div>
//             <div>Uploading a new photo</div>
//             <hr/>
//             <div>
//                 It will be easier for your friends to recognize you if you upload a real photo of yourself. You can
//                 upload
//                 the image in JPG, GIF, or PNG format.
//             </div>
//             <input type="file" onChange={onMainPhotoSelected}/>
//             <hr/>
//             <div>If you're having trouble loading, try selecting a smaller photo.</div>
//         </div>
//     );
// };