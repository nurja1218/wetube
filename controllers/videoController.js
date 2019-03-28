export const home = (req, res) => res.render("home", { pageTitle: "Home" , name: "wonderful site"});

export const search = (req, res) => {
    const {
        query: { clue: outcome }
    } = req;
    res.render("search", { pageTitle: "Search", outcome});
};

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });