
const gethomepage = (req, res) => {
    res.render('home', { title: 'Home' });
}
export { gethomepage };