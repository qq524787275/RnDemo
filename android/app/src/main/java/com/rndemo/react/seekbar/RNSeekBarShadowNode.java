package com.rndemo.react.seekbar;

import android.annotation.SuppressLint;
import android.view.View;
import android.view.ViewGroup;
import android.widget.SeekBar;

import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.yoga.YogaMeasureFunction;
import com.facebook.yoga.YogaMeasureMode;
import com.facebook.yoga.YogaMeasureOutput;
import com.facebook.yoga.YogaNode;

/**
 * Created by zzc on 2018-07-25.
 */
public class RNSeekBarShadowNode extends LayoutShadowNode implements YogaMeasureFunction {

    private Integer mHeight = -1;
    private Integer mWidth = -1;


    public RNSeekBarShadowNode() {
        setMeasureFunction(this);
    }


    @Override
    public long measure(YogaNode node, float width, YogaMeasureMode widthMode, float height, YogaMeasureMode heightMode) {
        if (mWidth == -1) {
            SeekBar seekBar = new SeekBar(getThemedContext(), null);
            @SuppressLint("Range") final int spec = View.MeasureSpec.makeMeasureSpec(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    View.MeasureSpec.UNSPECIFIED);
            seekBar.measure(spec, spec);
            mHeight = seekBar.getMeasuredHeight();
            mWidth = seekBar.getMeasuredWidth();
        }
        return YogaMeasureOutput.make(mHeight, mWidth);
    }
}