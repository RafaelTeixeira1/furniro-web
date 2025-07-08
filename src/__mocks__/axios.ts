export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        logradouro: "Av. Paulista",
        localidade: "São Paulo",
        uf: "SP",
        erro: false
      }
    })
  )
};
