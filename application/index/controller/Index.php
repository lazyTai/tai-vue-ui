<?php

namespace app\index\controller;

use think\Controller;
use app\index\model\Good as GoodDaO;
class Index extends Controller
{
    public function index()
    {
        $user=session('ext_user');
        // $results= GoodDaO::read_by_create_time();
        // $this->assign('list', json_encode($results));
        if($user){
            $this->assign('user', json_encode($user));
        }else{
            $this->assign('user', json_encode([]));
        }
        return $this->fetch();
    }
}
