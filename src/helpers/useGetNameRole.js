import { useDispatch, useSelector } from "react-redux"
import { getRolesAction } from "../redux/staticData"
import { getRolesSD } from "../selectors"

export const useGetNameRole = valueRole => {
  const d = useDispatch()
  const roles = useSelector(getRolesSD)
  if (roles.length === 0) d(getRolesAction())

  return roles?.find(role => role.value === valueRole['item_name'])?.label
}