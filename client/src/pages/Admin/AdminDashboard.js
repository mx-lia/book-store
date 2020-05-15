import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import AdminHeader from "../../components/AdminLayout/AdminHeader";
import AdminFooter from "../../components/AdminLayout/AdminFooter";
import CardButton from "../../components/AdminLayout/CardButton";
import DataGrid from "../../components/DataGrid";

import { ReactComponent as CircleIcon } from "../../assets/circle.svg";
import { ReactComponent as AvailableIcon } from "../../assets/available.svg";
import { ReactComponent as NotAvailableIcon } from "../../assets/not-available.svg";
import { ReactComponent as InboxIcon } from "../../assets/inbox.svg";
import { ReactComponent as AddIcon } from "../../assets/add.svg";

const AdminDashboard = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [availableCount, setAvailableCount] = useState(0);
  const [notAvailableCount, setNotAvailableCount] = useState(0);

  return (
    <div>
      <AdminHeader
        title={"Books"}
        subtitle={`You currently have ${totalCount} in the catalog!`}
      />
      <Container fluid as="main" className="my-3 min-vh-100" role="main">
        <Row>
          <Col>
            <p className="border-bottom">Overview</p>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md className="mb-2 mb-md-0">
            <CardButton
              title={totalCount}
              subtitle={"all books"}
              icon={<CircleIcon />}
            />
          </Col>
          <Col xs={12} md className="mb-2 mb-md-0">
            <CardButton
              title={availableCount}
              subtitle={"available books"}
              icon={<AvailableIcon />}
            />
          </Col>
          <Col xs={12} md className="mb-2 mb-md-0">
            <CardButton
              title={notAvailableCount}
              subtitle={"not available books"}
              icon={<NotAvailableIcon />}
            />
          </Col>
          <Col xs={12} md className="mb-2 mb-md-0">
            <CardButton
              title={<AddIcon width="22px" height="22px" />}
              subtitle={"new book"}
              icon={<InboxIcon />}
              href={"/admin/dashboard/newbook"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="border-bottom">Books ({totalCount})</p>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <DataGrid
              setTotalCount={setTotalCount}
              setAvailableCount={setAvailableCount}
              setNotAvailableCount={setNotAvailableCount}
            />
          </Col>
        </Row>
      </Container>
      <AdminFooter />
    </div>
  );
};

export default AdminDashboard;
