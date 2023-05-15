import React from "react"
import '../styles/SelectTip.css';

const SelectTip = ({updateTip, reset}) => {

    const group = React.useRef();
 
    // div에 선택한 버튼 아이디 클래스로 올려서 넣다 뺏다 하면서 클릭된 버튼이 잇는지 없는지 확인해주기 플러스 css자동적용
    // useBoolean, useState
    function onTipClick(e) {
        const tagName = e.target.tagName;
        const name = e.target.innerHTML
        const cls = e.target.className;

        if(tagName === "BUTTON") {
            const tip = name.replace(/\D/g, '');
            updateTip(tip);
            onButtonChange(cls);
            onButtonColorChange(cls, "#26C2AE", "#00474B");
        }
       
     }
    function onButtonChange(cls) {
        const buttonGroup = group.current.classList;
        if(buttonGroup.length === 1) {
            buttonGroup.add(cls);
        } else {
            onRemoveClass();
            buttonGroup.add(cls);
       
             }

    }
    function onRemoveClass() {
        const buttonGroup = group.current.classList;
        onButtonColorChange(buttonGroup[1], "none", "white")
        buttonGroup.remove(buttonGroup[1]);
    }
    function onButtonColorChange(cls, color, font) {
        const main = group.current
       const button = main.querySelector(`.${cls}`);
        button.style = `background-color: ${color}; color: ${font};`
    }
    React.useEffect(()=> {
        if(reset) {
   
      onRemoveClass();
        }
     
       },[reset])
    return (
        <div className="select-tip">
            <div className="select-tip-title">Select Tip %</div>
            <div className="button-group" onClick={onTipClick} ref={group}>
                <button className="one">5%</button>
                <button className="two">10%</button>
                <button className="three">15%</button>
                <button className="four">20%</button>
                <button className="five">25%</button>
                <button className="six">30%</button>
            </div>
        </div>
    )

}

export default SelectTip;