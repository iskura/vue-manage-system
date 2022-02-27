/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-16 21:17:06
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-14 20:30:13
 */
import http from "../utils/request";

export const fetchData = (data, url) => {
  console.log("-1-1-1-1-", data, typeof data.title);
  if (url !== "list") {
    console.log("url", url);
    return http({
      method: "post",
      url: "api/blog/" + url,
      data: {
        title: data.title,
        content: data.content,
        createtime: data.createtime,
      },
      headers: { "Content-Type": "application/json" },
      params: {
        id: data.id,
      },
    });
  } else {
    return http({
      url: "api/blog/" + url,
      method: "GET",
    });
  }
};
