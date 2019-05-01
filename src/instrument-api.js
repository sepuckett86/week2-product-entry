const instrumentApi = {
    set(instrumentData) {
        const json = JSON.stringify(instrumentData);
        localStorage.setItem('instrument', json);
    },
    get() {
        const json = localStorage.getItem('instrument');
        const instrument = JSON.parse(json);
        return instrument;
    },
    getAll() {
        const json = localStorage.getItem('instruments');
        const instruments = JSON.parse(json);
        if(!instruments) {
            return [];
        }
        return instruments;
    }
};

export default instrumentApi;