import * as Yup from "yup";

export const createOrUpdateTodoSchemaValidate = Yup.object().shape({
  todo: Yup.string().required(),
});
