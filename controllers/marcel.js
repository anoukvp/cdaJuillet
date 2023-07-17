/*************************/
/*** Import used modules */


/*****************************************/
/*** Unit route for Marcel resource */

exports.getAllMarcels = (req, res) => {
    return res.json({ message: "All marcel" })
}

exports.getMarcel = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `One marcel id ${pid}` })
}

exports.addMarcel = async (req, res) => {
    return res.json({ message: 'Marcel Created'})
}

exports.updateMarcel = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Marcel id:${pid} Updated`})
}

exports.deleteMarcel =  (req, res) => {
    let pid = parseInt(req.params.id)

    return res.status(204).json({})
}