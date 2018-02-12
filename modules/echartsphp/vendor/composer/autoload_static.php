<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit076de90908193184a3374f1050f08831
{
    public static $prefixLengthsPsr4 = array (
        'H' => 
        array (
            'Hisune\\EchartsPHP\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Hisune\\EchartsPHP\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit076de90908193184a3374f1050f08831::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit076de90908193184a3374f1050f08831::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}