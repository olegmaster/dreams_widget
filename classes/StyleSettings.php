<?php

class StyleSettings
{
    public $bg;
    public $btn_fg;

    public function __construct($bg, $btn_fg)
    {
        $this->bg = $bg ?? '#1D274A';
        $this->btn_fg = $btn_fg ?? '#603EF2';
    }
}
