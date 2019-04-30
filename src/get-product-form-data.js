function getProductFormData(formData) {
    const instrument = {
        name: formData.get('name'),
        price: formData.get('price'),
        description: formData.get('description'),
        family: formData.get('instrument-family'),
        accessories: formData.getAll('accessory'),
        condition: formData.get('condition')
    };
    return instrument;
}

export default getProductFormData;