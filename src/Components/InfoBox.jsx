import CollapsibleBox from "@/Components/CollapsibleBox.jsx";

export default function InfoBox({ type = '', height = 0, contents }) {

    let styleFaq = 'px-[30px] py-[20px] mt-[50px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]';
    let styleSidePannel = " h-full px-[20px] py-[22px] max-xl:mt-[30px]  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll ";

    let style;

    if (type === 'faq') {
        style = styleFaq;
    }
    else if (type === 'sidePannel') {
        style = styleSidePannel;
    }

    function addCollapsible(element, i, contents) {

        return (
            <CollapsibleBox
                heading={element[0]}
                headingBold={(type === 'faq') ? true : false}
                content={element[1]}
                type={type}
                last={(i + 1 == contents.length) ? true : false}
            />
        );
    }

    return (
        <div
            className={style}
        >
            {(type === 'sidePannel') ? <div className={"font-semibold mb-[18px] "}>How to use this calculator?</div> : ''}
            {contents.map(addCollapsible)}

        </div>
    );
}