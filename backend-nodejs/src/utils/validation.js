export const validateTicket = (req, res, next) => {
  const { titulo, descripcion, estado } = req.body;
  const validStates = ["Abierto", "Cerrado"];

  if (!titulo || typeof titulo !== "string") {
    return res
      .status(400)
      .json({ error: "Titulo es obligatorio y debe ser un string" });
  }

  if (!descripcion || typeof descripcion !== "string") {
    return res
      .status(400)
      .json({ error: "Descripcion es obligatoria y debe ser un string" });
  }

  if (estado && !validStates.includes(estado)) {
    return res.status(400).json({ error: "Estado inválido" });
  }

  next();
};
