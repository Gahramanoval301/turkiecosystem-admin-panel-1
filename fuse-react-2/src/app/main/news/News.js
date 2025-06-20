/* eslint-disable prettier/prettier */
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import FusePageSimple from "@fuse/core/FusePageSimple";
import AdminPageStructure from "@fuse/core/Admin/AdminPageStructure";
import { deleteNewsContent, deleteNewsImage, getNewsContent, getSingleNewsById, sendNewsContent, sendNewsImage, updateNewsContent } from "src/@mock-api/api/news-api";
import { newsCreateFormInputs, newsFormInitialValues, useNewsFormValidation } from "src/data/formikFieldData";
import { useValidation } from "@mui/x-date-pickers/internals";
import { useEffect, useState } from "react";
import AdminShowTableData from "@fuse/core/Admin/AdminShowTableData";

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

function NewsPage(props) {
    const { t } = useTranslation("newsPage");
    const [content, setContent] = useState([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState({})
    const [reload, setReload] = useState({})

    useEffect(() => {

        const getAllContent = async () => {
            try {
                const responseData = await getNewsContent(page);
                console.log(responseData);
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
                    <h4>{t("NEWS")}</h4>
                </div>
            }
            content={
                <div className="p-24">

                    <AdminPageStructure getContentAPI={getNewsContent} description={"Choose an action to perform on the News Page."} actions={
                        [
                            { label: "Show News", value: "ShowNews", props: { setTablePage: setPage, data: content, pagination } },
                            { label: "Show Single News", value: "ShowSingleNews", props: { getSingleData: getSingleNewsById } },
                            { label: "Update News", value: "UpdateNews", props: { updateData: updateNewsContent, inputs: newsCreateFormInputs, useValidation: useNewsFormValidation, initialValues: newsFormInitialValues, section: "news" } },
                            { label: "Create News", value: "CreateNews", props: { createData: sendNewsContent, inputs: newsCreateFormInputs, useValidation: useNewsFormValidation, initialValues: newsFormInitialValues, section: "news" } },
                            { label: "Delete News", value: "DeleteNews", props: { deleteData: deleteNewsContent } },
                            { label: "Add Image", value: "AddImg", props: { addImage: sendNewsImage, section: "news" } },
                            { label: "Delete Image", value: "DeleteImg", props: { deleteImage: deleteNewsImage } }
                        ]
                    } />

                </div>
            }
            scroll="content"
        />
    );
}

export default NewsPage;
