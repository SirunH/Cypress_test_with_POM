module.exports = {
    generateDates() {
        let today = new Date();
        let startDate = new Date(today.setDate(today.getDate() + 10)).toISOString().split('T')[0];
        let endDate = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0];
        return [startDate, endDate];
    }


}