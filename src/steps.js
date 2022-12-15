const CustomStep = ({ triggerNextStep }) => {
    console.log(triggerNextStep,'triggerNextStep')
    return (
        <button onClick={() => triggerNextStep({ trigger: '3' })}>Next</button>
    );
};
export default CustomStep