<?php

namespace app\index\util;

class Util
{
    public static function object_array($array)
    {
        if (is_object($array)) {
            $array = (array)$array;
        }
        if (is_array($array)) {
            foreach ($array as $key => $value) {
                $array[$key] = Util::object_array($value);
            }
        }
        return $array;
    }

    public static function upload_one($files=[]){
            foreach($files as $file){
                $info = $file->
                validate(['size'=>(1048576/2),'ext'=>'jpg,png,gif'])
                ->move(ROOT_PATH . 'public' . DS . 'uploads');
                if($info){
                    // 成功上传后 获取上传信息
                    // 输出 jpg
                    // 输出 42a79759f284b767dfcb2a0197904287.jpg
                    return [
                        'success'=>true,
                        'message'=>'/huoshu/public/uploads/'.$info->getSaveName()
                    ];
                }else{
                    // 上传失败获取错误信息
                    return [
                        'success'=>false,
                        'message'=>$file->getError()
                    ] ;
                }    
            }
    }
}