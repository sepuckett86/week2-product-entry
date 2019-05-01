const instrumentApi = {
    storage: localStorage,
    set(instrumentData) {
        const instruments = instrumentApi.getAll();
        instruments.push(instrumentData);
        const json = JSON.stringify(instruments);
        instrumentApi.storage.setItem('instruments', json);
    },
    get() {
        const instruments = instrumentApi.getAll();
        return instruments[0];
    },
    getAll() {
        const json = instrumentApi.storage.getItem('instruments');
        const instruments = JSON.parse(json);
        if(!instruments) {
            return [];
        }
        return instruments;
    }
};

export default instrumentApi;