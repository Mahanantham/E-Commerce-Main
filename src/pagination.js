// // import { matchPath } from "react-router-dom"

// function pagination({ total, records, update }) {
//     let page = Math.ceil(total / records)
//     console.log(page)

//     let arr = []
//     console.log(arr)

//     for (let i = 1; i <= page; i++) {
//         arr.push(i)
//     }


//     return (
//         <div>
//             <h1>Pagination</h1>
//             <ul className="pagination">  
//                 {arr.map((i)=>{
//                     <li className="page-item">
//                         <a href="#" onClick={() => { update(i) }} className="page-link">{i}</a>
//                     </li>
                    
//                 })}
 
//             </ul>
//         </div>
//     )
// }
// export default pagination;
