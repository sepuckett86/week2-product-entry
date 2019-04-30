function getProductFormData(formData) {
    const instrument = {
        name: formData.get('name'),
        price: parseInt(formData.get('price')),
        description: formData.get('description'),
        family: formData.get('family'),
        accessories: formData.getAll('accessory'),
        condition: formData.get('condition')
    };
    return instrument;
}

export default getProductFormData;