import asyncHandler from "../middleware/asyncHandler.js";




const summarize = asyncHandler(async (req, res) => {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(req.body.articleUrl)}&length=3&lang=tr`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (response.status === 200) {
            res.status(200).json({
                summary: result.summary,
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }

})


export { summarize };
