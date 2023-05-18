document.querySelector("#btn").addEventListener("click", () => {
    const input = document.querySelector("#input").value
    const output = document.querySelector("#output")
    const result = convertString(input)
    output.value = result
    output.select()
    document.execCommand("copy")
    alert("已複製到剪貼簿")
    // 清空輸入框
    document.querySelector("#input").value = ""
})

// https://drive.google.com/file/d/1c5paqyh-9zZcObhS3Y5sfaHJg7ueo3h2/view?usp=sharing, https://drive.google.com/file/d/1qN9PPkxi7l7ZJ63U3WDTXefDMWw-ILht/view?usp=sharing, https://drive.google.com/file/d/1snymfaKRjAAO6KRLpTkKwUtRu3Z0mXLD/view?usp=sharing, https://drive.google.com/file/d/1xwfixoz497V6UTwn2IIUfP75Mmzi6cYX/view?usp=sharing, https://drive.google.com/file/d/1zXx6uw5tsgQz_ydX6g7ubl6_aeMN5D9l/view?usp=sharing

// 轉換字串
const convertString = (str) => {
    let result
    let strarr = str.split(", ")
    console.log(strarr)
    for (let i = 0; i < strarr.length; i++) {
        strarr[i] = strarr[i].replace(
            /https:\/\/drive.google.com\/file\/d\/(.*)\/view\?usp=sharing/g,
            "https://drive.google.com/uc?export=view&id=$1"
        )
        result = strarr.join("\n")
    }
    return result
}
