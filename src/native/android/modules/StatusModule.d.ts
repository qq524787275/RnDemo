export default class StatusModule {
    //状态栏黑夜模式
    static setDarkMode(): void;

    //状态栏白天模式
    static setLightMode(): void;

    //沉浸式状态栏
    static setTransparent(): void;

    //沉浸式导航栏
    static transparentNavigationBar()

    /**
     * 状态栏颜色
     *
     * @param alpha 透明度 0-255
     */
    static setColor(color: string, alpha: number)


    /**
     * 导航栏颜色
     *
     * @param color
     * @param alpha
     */
    static setNavigationBarColor(color: string, alpha: number)


    /**
     * 状态栏透明度
     * @param alpha 透明度 0-1
     */
    static setAlpha(alpha: number)

    /**
     * 导航栏透明度
     * @param alpha 透明度 0-1
     */
    static setNavigationAlpha(alpha: number)

    /**
     * 全屏显示
     * @param isFullScreen
     */
    static fullScreen(isFullScreen: boolean)
}
