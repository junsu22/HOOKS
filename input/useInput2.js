export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            //validator type이 function 이라면?
            setValue(value); //true 이기 때문에 willupdate 는 항상 업데이트 될 것이다.
        }
    };
    return { value, onChange };
};