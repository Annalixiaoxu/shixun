<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: Dell
 * Date: 2017/7/12
 * Time: 11:10
 */
class User extends CI_Controller
{

    public function login()
    {
        $username = $this -> input -> post("username");
        $password = $this -> input -> post("password");

        $this -> load -> model("user_model");
        $row = $this -> user_model -> get_by_username_password($username, $password);
        if($row){
            echo "登录成功";
        } else {
            echo "登录失败";
        }
    }
    public function check_username(){
        $username = $this->input->post("username");
        $this->load->model("user_model");
        $row = $this->user_model->check_username($username);
        if($row){
            echo "no";
        }else{
            echo "yes";
        }
    }

    public function register()
    {
        $username = $this->input->post("username");
        $password = $this->input->post("password");
        $this->load->model("user_model");
        $num = $this->user_model->insert_user($username, $password);
        if($num>0){
            redirect("user/login_page");
        }
    }

    public function login_page()
    {
        $this -> load -> view('login');
    }


    public function register_page()
    {
        $this -> load -> view("register");
    }
}