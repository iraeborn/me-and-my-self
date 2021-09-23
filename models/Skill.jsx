const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Adicione um título'],
        unique: true,
        trim: true,
        maxlength: [40, 'Título deve conter no máximo 40 caracteres']
    },
    description: {
        type: String,
        require: true,
        maxlength: [200, 'Descrição deve conter no máximo 200 caracteres']
    }
})

module.exports = mongoose.models.Skill || mongoose.model('Skill', SkillSchema);