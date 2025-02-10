const express = require('express')
const router = express.Router();

router.get('',(req, res)=>{
    const locals = {
        title: 'Blog', 
        description: 'My first blog'
    }
    res.render('index', {locals});
});

router.get('/about', (req, res)=>{
    res.render('about');
});

module.exports = router;