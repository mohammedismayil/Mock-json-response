// import React from "react";

import API from "../utils/API";
import React, { useState, useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import CTA from "../components/CTA";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from "@windmill/react-ui";
import { EditIcon, TrashIcon } from "../icons";
import response from "../utils/demo/tableData";
export default function Mocks() {
  const [showModal, setShowModal] = React.useState(false);
  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1);
  const [pageTable2, setPageTable2] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([]);
  const [dataTable2, setDataTable2] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p);
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p);
  }


  function getAllMocks() {
    API.getAllMocksWeb()
      .then((res) => {
        // console.log(res.data);
        // setjson(JSON.stringify(res.data.json));
        // setcreatedID(res.data._id);
        console.log(JSON.parse(JSON.stringify(res.data)));
        let data = JSON.parse(JSON.stringify(res.data));

        setDataTable2(
          data.slice(
            (pageTable1 - 1) * resultsPerPage,
            pageTable1 * resultsPerPage
          )
        );
      })
      .catch((err) => console.log(err));
  }
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    getAllMocks();
    // setDataTable1(
    //   response.slice(
    //     (pageTable1 - 1) * resultsPerPage,
    //     pageTable1 * resultsPerPage
    //   )
    // );
  }, [pageTable1]);

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    // setDataTable2(
    //   response2.slice(
    //     (pageTable2 - 1) * resultsPerPage,
    //     pageTable2 * resultsPerPage
    //   )
    // );
  }, [pageTable2]);
  function showConfirm() {
    setShowModal(true);
  }
  function deleteAllMocks() {
    console.log("pro logging-- deleting the entire collection");

    API.deleteAllMocks()
      .then((res) => console.log("deleting all mocks"))
      .catch((err) => console.log(err));
    setShowModal(false);
  }
  function backupAllMocks() {
    console.log("pro logging-- deleting the entire collection");

    API.backupAllMocks()
      .then((res) => console.log("backedup  all mocks"))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="flex-wrap">
        {/* <div className="content-center justify-center"> */}
        {/* <h1 className="font-bold text-3xl text-center">Admin</h1> */}
        {/* <div className=""> */}

        <div className=" flex  rounded-2xl content-center m-auto w-1/2">
          <div className="p-5">
            <button
              className="bg-purple-500 pl-5 pr-5 pt-2 pb-2 mt-5 rounded-lg text-white w-full"
              onClick={backupAllMocks}
            >
              Download Backup
            </button>
          </div>

          <div className="p-5">
            <button
              className="bg-white pl-5 pr-5 pt-2 pb-2 mt-5 rounded-lg text-purple-500 w-full"
              onClick={showConfirm}
            >
              Delete all mocks
            </button>
          </div>
        </div>

        {/* </div> */}
        {/* </div> */}

        <div>
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Client</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Actions</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {dataTable2.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Avatar
                          className="hidden mr-3 md:block"
                          src={user.avatar}
                          alt="User avatar"
                        />
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.job}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">$ {user.amount}</span>
                    </TableCell>
                    <TableCell>
                      <Badge type={user.status}>{user._id}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {new Date(user.date).toLocaleDateString()}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Button layout="link" size="icon" aria-label="Edit">
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                        </Button>
                        <Button layout="link" size="icon" aria-label="Delete">
                          <TrashIcon className="w-5 h-5" aria-hidden="true" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                onChange={onPageChangeTable1}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        </div>
      </div>

      {showModal ? <modalNew setShowModal={true}></modalNew> : null}
    </>
  );
}
