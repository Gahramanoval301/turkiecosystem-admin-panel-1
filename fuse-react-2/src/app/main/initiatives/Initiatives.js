/* eslint-disable prettier/prettier */
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import FusePageSimple from "@fuse/core/FusePageSimple";
import AdminPageStructure from "@fuse/core/Admin/AdminPageStructure";
import { deleteInitiativeContent, deleteInitiativeImage, getInitiativeContent, getSingleInitiativeById, sendInitiativeContent, sendInitiativeImage, updateInitiativeContent } from "src/@mock-api/api/initiative-api";
import { newsCreateFormInputs, newsFormInitialValues, useNewsFormValidation } from "src/data/formikFieldData";
import { useEffect, useState } from "react";

const Root = styled(FusePageSimple)(({ theme }) => ({
    "& .FusePageSimple-header": {
        backgroundColor: theme.palette.background.paper,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.divider,
    },
    '& .FusePageSimple-toolbar': {},
    "& .FusePageSimple-content": {},
    "& .FusePageSimple-sidebarHeader": {},
    "& .FusePageSimple-sidebarContent": {},
}));

function InitiativesPage(props) {
    const { t } = useTranslation("initiativesPage");
     const [content, setContent] = useState([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState({})
    const [reload, setReload] = useState({})

    
    useEffect(() => {

        const getAllContent = async () => {
            try {
                const responseData = await getInitiativeContent(page);
                if (responseData) {
                    setContent(responseData.data.data);
                    setPagination(responseData.data.pagination);
                } else {
                    setContent([]);

                }
            } catch (error) {
                setContent([]);

            }
        };

        getAllContent();
    }, [reload, page]);

    return (
        <Root
            header={
                <div className="p-24">
                    <h4>{t("INITIATIVES")}</h4>
                </div>
            }
            content={
                <div className="p-24">
                    <AdminPageStructure getContentAPI={getInitiativeContent} description={"Choose an action to perform on the Initiatives Page."} actions={
                        [
                            { label: "Show Initiatives", value: "ShowNews", props: { getAllData: getInitiativeContent, data: content, pagination } },
                            { label: "Show Single Initiative", value: "ShowSingleNews", props: { getSingleData: getSingleInitiativeById } },
                            { label: "Update Initiative", value: "UpdateNews", props: { updateData: updateInitiativeContent, inputs: newsCreateFormInputs, useValidation: useNewsFormValidation, initialValues: newsFormInitialValues, section: "initiative" } },
                            { label: "Create Initiative", value: "CreateNews", props: { createData: sendInitiativeContent, inputs: newsCreateFormInputs, useValidation: useNewsFormValidation, initialValues: newsFormInitialValues, section: "initiative" } },
                            { label: "Delete Initiative", value: "DeleteNews", props: { deleteData: deleteInitiativeContent } },
                            { label: "Add Image", value: "AddImg", props: { addImage: sendInitiativeImage, section: "initiative" } },
                            { label: "Delete Image", value: "DeleteImg", props: { deleteImage: deleteInitiativeImage } }
                        ]
                    } />
                </div>
            }
            scroll="content"
        />
    );
}

export default InitiativesPage;
