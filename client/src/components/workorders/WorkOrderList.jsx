import { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import { getMechanics } from "../../managers/userProfileManager.js";
import { Link } from "react-router-dom";
import {
  getIncompleteWorkOrders,
  updateWOrkOrder,
  markWorkOrderComplete,
  removeWorkOrder,
} from "../../managers/workOrderManager.js";

export default function WorkOrderList({ loggedInUser }) {
  const [workOrders, setWorkOrders] = useState([]);
  const [mechanics, setMechanics] = useState([]);

  const completeWorkOrder = (workOrderId) => {
    markWorkOrderComplete(workOrderId).then(() => {
      getIncompleteWorkOrders().then(setWorkOrders);
    });
    console.log(`Completed ${workOrderId}`);
  };
  const assignMechanic = (workOrder, mechanicId) => {
    const clone = structuredClone(workOrder);
    clone.mechanicUserProfileId = mechanicId || null;
    updateWOrkOrder(clone).then(() => {
      getIncompleteWorkOrders().then(setWorkOrders);
    });
    console.log(`Assigned ${mechanicId} to ${workOrder.id}`);
  };

  const delWorkOrder = (id) => {
    removeWorkOrder(id).then(() => {
      getIncompleteWorkOrders().then(setWorkOrders);
    });
    console.log("Work Order Deleted.");
  };

  useEffect(() => {
    getIncompleteWorkOrders().then(setWorkOrders);

    getMechanics().then(setMechanics);
  }, []);

  return (
    <>
      <h2>Open Work Orders</h2>
      <Link to="/workorders/create">New Work Order</Link>
      <Table>
        <thead>
          <tr>
            <th>Owner</th>
            <th>Brand</th>
            <th>Color</th>
            <th>Description</th>
            <th>DateSubmitted</th>
            <th>Mechanic</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workOrders.map((wo) => (
            <tr key={wo.id}>
              <th scope="row">{wo.bike.owner.name}</th>
              <td>{wo.bike.brand}</td>
              <td>{wo.bike.color}</td>
              <td>{wo.description}</td>
              <td>{new Date(wo.dateInitiated).toLocaleDateString()}</td>
              <td>
                {wo.mechanicUserProfile
                  ? `${wo.mechanicUserProfile.firstName} ${wo.mechanicUserProfile.lastName}`
                  : "unassigned"}
              </td>
              <td>
                <Input
                  type="select"
                  onChange={(e) => {
                    assignMechanic(wo, parseInt(e.target.value));
                  }}
                  value={wo.mechanicUserProfileId || 0}
                >
                  <option value="0">Choose mechanic</option>
                  {mechanics.map((m) => (
                    <option
                      key={m.id}
                      value={m.id}
                    >{`${m.firstName} ${m.lastName}`}</option>
                  ))}
                </Input>
              </td>
              <td>
                {wo.mechanicUserProfile && (
                  <Button
                    onClick={() => completeWorkOrder(wo.id)}
                    color="success"
                  >
                    Mark as Complete
                  </Button>
                )}
              </td>
              <td>
                <Button
                  onClick={() => delWorkOrder(wo.id)}
                  style={{ backgroundColor: "red" }}
                >
                  Delete Work Order
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
