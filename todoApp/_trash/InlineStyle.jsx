// import "../css/style.css"; // CSS STYLE SHEET

import styles from "./InlineStyle.module.css"

// const header = {
//     color: "blue", 
//     display: "flex", 
//     justifyContent: "center",
// }

export default function Style(){
    return (
        <div>
            {/* INLINE STYLING */}
            {/* <h1 className="header" style={header}>Inline Componet</h1> */}

            {/* CSS STYLING */}
            {/* <h1 className="inline-header" >CSS Component</h1> */}

            {/* CSS MODULE STYLING */}
            <h1 className={styles.header} >CSS MODULE</h1>

        </div>
    )
}