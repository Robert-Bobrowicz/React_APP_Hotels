const availableRules = {
    required(value) {
        return value ? '' : 'Required';
    }
}

export default function formValidate(rules = [], value) {   //jako parametr przyjmuje tablicę zasad walidacji formularza
    let error = '';

    rules.forEach(rule => {
        const errorMessage = availableRules[rule](value);
        if (errorMessage) {
            error = errorMessage;
        }
    })
    return { error };
}