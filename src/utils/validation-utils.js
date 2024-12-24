export const loginValidationSchema = {
    email: 'email_required',
    password: 'password_required',
}

export const signupValidationSchema = {
    email: 'email_required',
    phone: 'phone_required',
    password: 'password_required',
    confirmPassword: 'password_confirmation_required'
}

export const brokerValidationSchema = {
    insuranceCompany: 'this_field_is_required',
    claseDeMediador: 'this_field_is_required',
    autoridadDeControl: 'this_field_is_required',
    claveDeInscripcion: 'this_field_is_required',
    fechaDeInscripcion: 'this_field_is_required',
    razonSocial: 'this_field_is_required',
    cifIdentificacion: 'this_field_is_required',
    ambitoDeOperacion: 'this_field_is_required',
    autorizadaPorOtraEntidadAseguradora: 'this_field_is_required',
    complementario: 'this_field_is_required',
    agenteDeGrupo: 'this_field_is_required',
    billingAddress: 'this_field_is_required',
    postcode: 'this_field_is_required',
    townCity: 'this_field_is_required',
    provincia: 'this_field_is_required',
    country: 'this_field_is_required',
    website: 'this_field_is_required',
}

export const policyValidationSchema = {
    policyCompany: 'this_field_is_required',
    policyType: 'this_field_is_required',
    expiry: 'this_field_is_required',
    premium: 'this_field_is_required',
}

export const bidValidationSchema = {
    offerPrice: 'this_field_is_required',
}

export const validateData = (data, validationSchema) => {

    const errors = {}

    if (data.role && data.role === 'BROKER') {
        if (!data.firstName) {
            errors.firstName = 'this_field_is_required'
        }
        if (!data.lastName) {
            errors.lastName = 'this_field_is_required'
        }
    }

    for (const field in validationSchema) {
        if (!data[field]) {
            errors[field] = validationSchema[field]
        }
    }

    if (data.password && data.password.length < 4) {
        errors.password = 'password_must_be_at_least_4_characters'
    }

    if (data.password && data.confirmPassword &&
        data.password !== data.confirmPassword) {
        errors.confirmPassword = 'passwords_dont_match'
    }

    if (data.expiry) {
        const inputDate = new Date(data.expiry)
        const currentDate = new Date()
        const threeMonthsFromNow = new Date()
        threeMonthsFromNow.setMonth(currentDate.getMonth() + 3)

        if (inputDate > threeMonthsFromNow) {
            errors.expiry = 'expiry_date_must_be_within_3_months'
        }
    }

    return errors
}