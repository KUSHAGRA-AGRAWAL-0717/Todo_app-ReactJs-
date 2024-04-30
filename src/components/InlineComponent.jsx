// const header={color:"blue",fontSize:"140px"}
// export default function InlineComponent(){
//      return <div><h1 style={header}>Inline component</h1></div>
// }
//in the return statemant the outer curly bracket is for the javascript and the inner component is for the object 
//and in this object we uses the css
////////////////////////////////////////////////////above is the first way
// import '../css/style.css'
// export default function InlineComponent(){
//      return <div><h1 className='header'>Inline component</h1></div>
// }
////////////////////above is the css file method to implement /////
import styles from './inlinecomponent.module.css';
export default function InlineComponent(){
     return <div><h1 className={styles.header}>Inline component</h1></div>
}
//this is teh third method to define the css of the site using the react modules