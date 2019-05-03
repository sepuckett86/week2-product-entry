const instrumentApi = {
    storage: localStorage,
    set(instrumentData) {
        const instruments = instrumentApi.getAll();
        instruments.push(instrumentData);
        const json = JSON.stringify(instruments);
        instrumentApi.storage.setItem('instruments', json);
    },
    get(name) {
        const instruments = instrumentApi.getAll();
        for(let i = 0; i < instruments.length; i++) {
            const instrument = instruments[i];
            if(instrument.name === name) {
                return instrument;
            }
        }
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