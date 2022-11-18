import s from "./Blocks.module.css";
import Block from "./Block/Block";

const Blocks = ({blocks}) => {
    let blockItems = blocks.map(block => <Block key={block.number} block={block} />)

    return (
        <div className={s.blocks}>
            {blockItems}
        </div>
    )
}



export default Blocks;