var dados = {
    course: {
        id: 1,
        name: "Engenharias Mecânica",
        deliveryMode: "presencial",
        location: {
            id: 2,
            name: "Campus Indianópolis",
            city: "São Paulo - SP"
        },
        shifts: [
            {
                id: 100,
                name: "Manhã"
            },
            {
                id: 101,
                name: "Noite"
            },
        ],
        offers: [
            {
                id: 1000,
                shiftId: 100,
                discountPercentage: 81,
                valueBeforeDiscount: 1953.07,
                valueAfterDiscount: 363.84,
                leftInStock: 2,
                highlights: [
                    'Isenção da Taxa de Matrícula',
                    'Isenção da Taxa de Vestibular',
                    'Assinatura da Catho grátis até o fim do curso',
                    'Primeira mensalidade, referente a janeiro, gratuita.',
                ]
            },
            {
                id: 1001,
                shiftId: 101,
                discountPercentage: 79,
                valueBeforeDiscount: 1953.07,
                valueAfterDiscount: 394.20,
                leftInStock: 3,
                highlights: [
                    'Primeira mensalidade, referente a janeiro, gratuita.',
                    'Isenção da Taxa de Vestibular',
                    'Isenção da Taxa de Matrícula',
                    'Assinatura da Catho grátis até o fim do curso'
                ]
            },
        ]
    }
}

var service = {

    consultaCurso:  function () {

        return dados.course;
    },

    consultaTurno: function () {

        return dados.course.shifts;
    },

    consultaOfertas: function () {

        return dados.course.offers;
    }
};