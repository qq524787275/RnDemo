package com.rndemo.react.statusbarutil;

import android.support.annotation.FloatRange;
import android.support.annotation.IntRange;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.gyf.barlibrary.ImmersionBar;
import com.orhanobut.logger.Logger;
import com.rndemo.MainActivity;

/**
 * Created by zzc on 2018-07-24.
 */
public class StatusModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLSAS = "StatusModule";

    public StatusModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLSAS;
    }

    /**
     * @param color 颜色 如:#ff0000
     * @param alpha 透明度 0-1
     */
    @ReactMethod
    public void setColor(final String color, @FloatRange(from = 0, to = 1) final float alpha) {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .fitsSystemWindows(true)
                        .statusBarColor(color)
                        .statusBarAlpha(alpha).init();
            }
        });
    }

    /**
     * 状态栏透明度
     *
     * @param alpha
     */
    @ReactMethod
    public void setAlpha(@FloatRange(from = 0, to = 1) final float alpha) {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .statusBarAlpha(alpha).init();
            }
        });
    }


    /**
     * 导航栏透明度
     *
     * @param alpha
     */
    @ReactMethod
    public void setNavigationAlpha(@FloatRange(from = 0, to = 1) final float alpha) {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .navigationBarAlpha(alpha).init();
            }
        });
    }

    /**
     * 透明状态栏
     */
    @ReactMethod
    public void setTransparent() {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Logger.i("setTransparent");
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .fitsSystemWindows(false)
                        .transparentStatusBar().init();
            }
        });
    }

    /**
     * @param isFull
     */
    @ReactMethod
    public void fullScreen(final boolean isFull) {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Logger.i("" + isFull);
                ((MainActivity) getCurrentActivity()).mImmersionBar.fullScreen(isFull).init();
            }
        });
    }

    /**
     * 半透明状态栏
     *
     * @param alpha 透明度 0-255
     */
    @ReactMethod
    public void setTranslucent(@FloatRange(from = 0, to = 1) final float alpha) {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .statusBarAlpha(alpha).init();
            }
        });
    }


    /**
     * 状态栏黑夜模式
     */
    @ReactMethod
    public void setDarkMode() {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .statusBarDarkFont(true).init();
            }
        });
    }

    /**
     * 状态栏白天模式
     */
    @ReactMethod
    public void setLightMode() {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .statusBarDarkFont(false).init();
            }
        });
    }

    /**
     * 导航栏颜色
     *
     * @param color
     * @param alpha
     */
    @ReactMethod
    public void setNavigationBarColor(final String color, @FloatRange(from = 0, to = 1) final float alpha) {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .navigationBarColor(color)
                        .fullScreen(false)
                        .navigationBarAlpha(alpha).init();
            }
        });
    }

    /**
     * 隐藏导航栏
     */
    @ReactMethod
    public void transparentNavigationBar() {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((MainActivity) getCurrentActivity()).mImmersionBar
                        .transparentNavigationBar()
                        .fullScreen(true)
                        .init();
            }
        });
    }
}
