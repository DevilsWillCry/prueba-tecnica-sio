//* Validaciones de tickets - Middleware
//? 1. Se encargan de verificar que el cliente envíe datos correctos antes de llegar al controlador o servicio.
//? 2. En caso de que no sean correctos, se devuelve un mensaje de error.

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
