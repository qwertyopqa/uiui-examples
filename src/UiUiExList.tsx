type Args = {
  children: JSX.Element[] | JSX.Element;
};

export function UiUiExList({children}: Args) {
  return (
    <div id="main-list">
      {children}
      <div id="main-list_ui">
        <img src="/uiui.png" alt="UiUi logo" />
        <ul>
          <li><a href="/from-file" >Read Config from Code</a></li>
          <li><a href="/glsl/tiles" >Shader Frag #1 (Tiles)</a></li>
          <li><a href="/glsl/thread" >Shader Frag #2 (Thread)</a></li>
        </ul>
        <div id="logos">
          <a href="https://github.com/qwertyopqa/uiui"><img src="/github.svg" alt="github logo" /></a>
          <a href="https://www.npmjs.com/package/@opqa/uiui"><img src="/npm.svg" alt="npm logo" /></a>
        </div>
      </div>
    </div>
  );
}