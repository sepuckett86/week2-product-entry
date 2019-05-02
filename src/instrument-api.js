const instrumentApi = {
    set(instrumentData) {
        const json = JSON.stringify(instrumentData);
        localStorage.setItem('instrument', json);
    },
    get() {
        const json = localStorage.getItem('instrument');
        const instrument = JSON.parse(json);
        return instrument;
    }
};

export default instrumentApi;