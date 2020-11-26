import { setManagers } from 'actions/';

const loadManagers = async (response) => {
  let aux_managers = [];
  if (!response.managers) {
    response.managers = [];
  }
  response.managers.forEach((manager) => {
    aux_managers.push({
      id: manager.id,
      name: manager.name,
      email: manager.email,
    });
  });
  if (aux_managers.length === 0) {
    aux_managers = null;
  }
  await setManagers(aux_managers);
};

export default loadManagers;
