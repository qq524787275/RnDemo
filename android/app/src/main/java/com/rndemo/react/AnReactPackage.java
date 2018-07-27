package com.rndemo.react;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.rndemo.react.seekbar.RNSeekBarViewManager;
import com.rndemo.react.statusbarutil.StatusModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by zzc on 2018-07-24.
 */
public class AnReactPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> nativeModules = new ArrayList<>();
        nativeModules.add(new StatusModule(reactContext));
        return nativeModules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new RNSeekBarViewManager());
        return viewManagers;
    }
}
