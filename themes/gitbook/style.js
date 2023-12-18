/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    #toc-wrapper{
      max-height: calc(100vh - 200px);
      border-left: 3px solid rgba(0, 0, 0, 0.04);
      padding-left: 10px;
    }
    // 底色
    .dark body{
        background-color: black;
    }
  `}</style>
}

export { Style }
