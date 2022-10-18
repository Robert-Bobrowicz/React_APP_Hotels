const availableRules = {
    required(value) {
        return value ? '' : 'Required';
    },
    min(value, rule) {
        return value.length >= rule.length ? '' : `Minimum required characters: ${rule.length}`;
    }
}

export default function formValidate(rules = [], value) {   //jako parametr przyjmuje tablicę zasad walidacji formularza

    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];

        if (rule instanceof Object) {
            const errorMessage = availableRules[rule.rule](value, rule);
            if (errorMessage) {
                return errorMessage;
            }
        } else {
            const errorMessage = availableRules[rule](value);
            if (errorMessage) {
                return errorMessage;
            }
        }
    }
    return '';

    // let error = '';
    // rules.forEach(rule => {
    //     const errorMessage = availableRules[rule](value);
    //     if (errorMessage) {
    //         error = errorMessage;
    //     }
    // })
    // return {error};
}