export let lastId = 0;

export function UniqueComponentId() {
  let prefix = 'cw_id_';
  lastId++;
  return `${prefix}${lastId}`;
}



